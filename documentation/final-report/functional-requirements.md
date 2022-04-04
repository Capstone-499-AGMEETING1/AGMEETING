# Functional Requirements

### User Story

As a user I should be able to register and login to the website. I should be able to view the meeting items that are
currently in session. I should be able to view the meeting’s agenda. I should also be able to view all files that have
been uploaded throughout the course of the meeting. I should be able to interact with agenda items throughout the course
of the meeting, as well as see the voting status on different items throughout the meeting. I should be able to send
messages to those in my meeting. As a moderator, I should be able to see all the logged-in/registered users, as well as
be able to upload files.

### Build AGMeeting Front-End Components & Routes

- A navbar that provides easy access to user-specific activities.
- A sidebar that provides easy access to all functionality on the website.
- Support for theming, and allow the user to change the theme as desired.
- A session page that allows the user to see all items being discussed in the meeting.
- An agenda page that shows all items that have been and will be discussed in the meeting. It shows the status of each
  item as well as the result of voting. Button to add an item.
- A vault page that shows all files uploaded to the current meeting. Provides information on the filetype, as well as a
  button for moderators to upload files.
- A logged-in users page to showcase all the users currently logged into the system. Only moderators can view this page.
- A register-users page to showcase all the users who have registered. Only moderators can view this page.
- A stats page to highlight a variety of statistics about the current meeting.
- A general settings page to enable editing of the meeting settings, as well as the process for voting.
- An interaction modal to allow participants to engage with items throughout the meeting.
- A current votes modal which allows users to see the current voting status on an item.
- A content messages modal which allows participants to send a message to those in the same meeting as them. Moderators
  have an option to send a message to anyone registered, even those in a different meeting.
- A notifications dropdown where incoming messages will be displayed.
- A profile dropdown to display the current user’s information, as well as provide the option to log out.
- A registration page that allows a user to register for an account.
- A login page where users can log in to their account.
- Having protected routes that can only be accessed by a logged-in user, or users with a specific role.
- Responsive website design to support multiple different devices.

### Build AGMeeting Back-End Components & Connect with UI

- The user needs to be able to register for an account using first name, last name, email, and meeting id.
- The user needs to be able to log in to their created account and it must be saved throughout sessions.
- Password information needs to be encrypted to ensure security.
- File upload must be supported and allow a moderator to upload the file, and then ensure that the file is stored in an
  accessible location.
- Must be able to get all logged-in users.
- Must be able to get all registered users.
- Must be able to send a message to the server.
- A message received by the server must be emitted to the correct users.
- A cookie must be passed to the UI when the user logs in.
- The passport session in the backend must be removed when a user logs out.
- All created APIs must be connected with the frontend.




