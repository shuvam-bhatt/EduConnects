// Submit Support Form
function submitSupportForm(event) {
    event.preventDefault();
  
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const issueType = document.querySelector("#issueType").value;
    const description = document.querySelector("#description").value;
  
    if (!name || !email || !issueType || !description) {
      alert("Please fill in all fields.");
      return;
    }
  
    fetch("/api/support", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, issueType, description }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Your support query has been submitted!");
          document.querySelector(".support-form").reset();
          fetchFAQs(); // Refresh FAQs after submission
        } else {
          alert("Failed to submit your query. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting support form:", error);
        alert("An error occurred. Please try again.");
      });
  }
  
  // Fetch and Render FAQs
  function fetchFAQs() {
    fetch("/api/support")
      .then((response) => response.json())
      .then((data) => {
        const faqList = document.getElementById("faq-list");
        faqList.innerHTML = data
          .map(
            (entry) => `
            <div class="faq-entry">
              <h3>${entry.name} (${entry.issueType})</h3>
              <p>${entry.description}</p>
            </div>
          `
          )
          .join("");
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
  }
  
  // Initialize FAQs on Page Load
  document.addEventListener("DOMContentLoaded", fetchFAQs);
  