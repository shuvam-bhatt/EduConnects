async function fetchSubjectData() {
  try {
    const response = await fetch("/data/data.json");
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching subject data:", error);
    return [];
  }
}

function updateBreadcrumb(path) {
  const breadcrumb = document.getElementById("breadcrumb");
  breadcrumb.innerHTML = `
      <div class="breadcrumb">
          Home ${path.map((item) => `> ${item}`).join(" ")}
      </div>
  `;
}

function renderSubjects(subjects) {
  const content = document.getElementById("dynamicContent");
  content.innerHTML = `
      <div class="subjects-grid">
          ${subjects
            .map(
              (subject) => `
              <div class="subject-card" onclick="showSubjectDetail('${
                subject.subject
              }')">
                  <h3>${subject.subject}</h3>
                  <div class="subject-progress">
                      <div class="progress-bar" style="width: ${getSubjectProgress(
                        subject.subject
                      )}%"></div>
                  </div>
                  <p>${subject.chapters.length} chapters</p>
              </div>
          `
            )
            .join("")}
      </div>
  `;
}

function getSubjectProgress(subject) {
  const progressData = {
    Physics: 90,
    Maths: 75,
    Chemistry: 60,
    English: 45,
    "Computer Science": 30,
  };
  return progressData[subject] || 0;
}

function showSubjectDetail(subjectName) {
  fetchSubjectData().then((data) => {
    const subject = data.find((s) => s.subject === subjectName);
    const content = document.getElementById("dynamicContent");

    content.innerHTML = `
          <div class="subject-detail">
              <div class="subject-header">
                  <h2>${subject.subject}</h2>
                  <div class="content-type-selector">
                      <button onclick="showSubjectNotes('${
                        subject.subject
                      }')" class="active">Notes</button>
                      <button onclick="showSubjectLectures('${
                        subject.subject
                      }')">Lectures</button>
                  </div>
              </div>
              <div class="chapters-grid">
                  ${subject.chapters
                    .map(
                      (chapter) => `
                      <div class="chapter-card">
                          <h4>${chapter.chapter}</h4>
                          <div class="chapter-actions">
                              <a href="${chapter.url}" target="_blank" class="button">View Notes</a>
                          </div>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
      `;
    updateBreadcrumb(["Subjects", subject.subject]);
  });
}

function showSubjectNotes(subjectName) {
  fetchSubjectData().then((data) => {
    const subject = data.find((s) => s.subject === subjectName);
    const notes = subject.chapters.filter((ch) => ch.type === "notes");
    const content = document.getElementById("dynamicContent");

    content.innerHTML = `
          <div class="subject-detail">
              <div class="subject-header">
                  <h2>${subject.subject}</h2>
                  <div class="content-type-selector">
                      <button onclick="showSubjectNotes('${
                        subject.subject
                      }')" class="active">Notes</button>
                      <button onclick="showSubjectLectures('${
                        subject.subject
                      }')">Lectures</button>
                  </div>
              </div>
              <div class="chapters-grid">
                  ${notes
                    .map(
                      (chapter) => `
                      <div class="chapter-card">
                          <h4>${chapter.chapter}</h4>
                          <div class="chapter-actions">
                              <a href="${chapter.url}" target="_blank" class="button">View Notes</a>
                          </div>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
      `;
    updateBreadcrumb(["Subjects", subject.subject, "Notes"]);
  });
}

function showSubjectLectures(subjectName) {
  fetchSubjectData().then((data) => {
    const subject = data.find((s) => s.subject === subjectName);
    const lectures = subject.chapters.filter((ch) => ch.type === "lecture");
    const content = document.getElementById("dynamicContent");

    content.innerHTML = `
        <div class="subject-detail">
            <div class="subject-header">
                <h2>${subject.subject}</h2>
                <div class="content-type-selector">
                    <button onclick="showSubjectNotes('${
                      subject.subject
                    }')">Notes</button>
                    <button onclick="showSubjectLectures('${
                      subject.subject
                    }')" class="active">Lectures</button>
                </div>
            </div>
            <div class="chapters-grid">
                ${lectures
                  .map(
                    (chapter) => `
                    <div class="chapter-card">
                        <h4>${chapter.chapter}</h4>
                        <div class="chapter-actions">
                            <a href="${chapter.url}" target="_blank" class="button">View Lecture</a>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
    updateBreadcrumb(["Subjects", subject.subject, "Lectures"]);
  });
}

function showAbout() {
  const content = document.getElementById("dynamicContent");
  content.innerHTML = `
      <div class="about-section">
          <h1>About EduConnects</h1>
          <div class="about-content">
              <div class="mission-vision">
                  <h2>Our Mission</h2>
                  <p style="font-size: 18px;">To provide quality education accessible to all students through innovative digital learning solutions.</p>
                
                  <h2>Our Vision</h2>
                  <p style="font-size: 18px;">To become the leading digital education platform that transforms how students learn and excel in their academic journey.</p>
              </div>
              
              <div class="features">
                  <h2>Key Features</h2>
                  <ul style="font-size: 18px;">
                      <li>Comprehensive subject coverage</li>
                      <li>Interactive learning materials</li>
                      <li>Progress tracking</li>
                      <li>Peer comparison</li>
                      <li>Expert-created content</li>
                  </ul>
              </div>
          </div>
      </div>
  `;
  updateBreadcrumb(["About"]);
}

// Function to show Support section
function showSupport() {
  const content = document.getElementById("dynamicContent");
  content.innerHTML = `
      <div class="support-section">
          <h1>Support Center</h1>
          <div class="support-options">
              <div class="support-card">
                  <h2>FAQ</h2>
                  <div class="faq-list">
                      <div class="faq-item">
                          <h4>1) What is EduConnects?</h4>
                          <p>EduConnects is an online learning platform that offers a variety of courses and resources for students and professionals.</p>
                      </div>
                      <div class="faq-item">
                          <h4>2) How do I reset my password?</h4>
                          <p>You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.</p>
                      </div>
                      <div class="faq-item">
                          <h4>3) How can I contact support?</h4>
                          <p>You can contact support by filling out the form in the "Contact Support" section or by emailing support@educonnects.com.</p>
                      </div>
                  </div>
              </div>
              
              <div class="support-card">
                  <h3>Contact Support</h3>
                  <form class="support-form">
                      <input type="text" placeholder="Your Name" required>
                      <input type="email" placeholder="Your Email" required>
                      <select>
                          <option value="">Select Issue Type</option>
                          <option value="technical">Technical Issue</option>
                          <option value="content">Content Related</option>
                          <option value="account">Account Issues</option>
                      </select>
                      <textarea placeholder="Describe your issue" required></textarea>
                      <button type="submit" <button type="submit" style="background-color: #7900c3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Submit</button>
                  </form>
              </div>
          </div>
      </div>
  `;
  updateBreadcrumb(["Support"]);
}


// Function to show Feedback section
function showFeedback() {
  const content = document.getElementById("dynamicContent");
  content.innerHTML = `
      <div class="feedback-section">
          <h1>Your Feedback Matters</h1>
          <div class="feedback-form">
              <form onsubmit="submitFeedback(event)">
                  <div class="rating-section">
                      <h2>Rate your experience</h2>
                      <div class="star-rating">
                          <!-- Add star rating system -->
                      </div>
                  </div>
                  
                  <div class="feedback-categories">
                      <h3>What would you like to rate?</h3>
                      <div class="category-options">
                          <label><input type="checkbox" value="content"> Content Quality</label>
                          <label><input type="checkbox" value="interface"> User Interface</label>
                          <label><input type="checkbox" value="support"> Support</label>
                          <label><input type="checkbox" value="features"> Features</label>
                      </div>
                  </div>
                  
                  <textarea placeholder="Share your detailed feedback" required></textarea>
                  <button type="submit" <button type="submit" style="background-color: #7900c3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Submit Feedback</button>
              </form>
          </div>
      </div>
  `;
  updateBreadcrumb(["Feedback"]);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchSubjectData().then(renderSubjects);

  const subjectsButton = document.getElementById("Subjects");
  if (subjectsButton) {
    subjectsButton.addEventListener("click", () => {
      fetchSubjectData().then(renderSubjects);
      updateBreadcrumb(["Subjects"]);
    });
  }

  const aboutButton = document.getElementById("About");
  if (aboutButton) {
    aboutButton.addEventListener("click", showAbout);
  }

  const supportButton = document.getElementById("Support");
  if (supportButton) {
    supportButton.addEventListener("click", showSupport);
  }

  const feedbackButton = document.getElementById("Feedback");
  if (feedbackButton) {
    feedbackButton.addEventListener("click", showFeedback);
  }
});

showSubjectDetail()
