let btn = document.querySelector("button");
let notificationContent = document.querySelector(".notification-content");

btn.addEventListener("click", function () {
	let notification = document.createElement("div");

	notification.classList.add("notification");

	notification.textContent = "Welcome To My page ! ";

	notificationContent.appendChild(notification);

	setTimeout(function () {
		notification.classList.add("remove");

		setTimeout(function () {
			notification.remove();
		}, 500);
	}, 2000);
});
