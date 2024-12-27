

document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector("body");
    const commentSection = document.createElement("div");
    commentSection.innerHTML = `
        <h2>Leave a Comment</h2>
        <form id="commentForm" style="margin-bottom: 20px;">
            <input type="text" id="name" placeholder="Your Name" required style="width: 80%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"><br>
            <textarea id="comment" placeholder="Your Comment" required style="width: 80%; height: 100px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px;"></textarea><br>
            <button type="submit" style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">Post Comment</button>
        </form>
        <div id="commentsDisplay" style="margin-top: 20px;"></div>
    `;
    commentSection.style.textAlign = "center";
    blogContainer.appendChild(commentSection);

    const commentForm = document.getElementById("commentForm");
    const commentsDisplay = document.getElementById("commentsDisplay");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const comment = document.getElementById("comment").value.trim();

        if (name && comment) {
            const commentHTML = `
                <div style="border: 1px solid #ccc; padding: 10px; margin: 10px auto; width: 80%; border-radius: 5px; text-align: left;">
                    <h4>${name}</h4>
                    <p>${comment}</p>
                </div>
            `;
            commentsDisplay.innerHTML += commentHTML;
            document.getElementById("name").value = "";
            document.getElementById("comment").value = "";
        } else {
            alert("Please fill out both fields before submitting!");
        }
    });
});
