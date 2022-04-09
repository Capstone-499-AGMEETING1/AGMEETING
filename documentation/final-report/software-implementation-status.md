# Software Implementation Status

### Testing

- Our code was tested to ensure each component was working as expected
    - Jest was used to test out React components
    - Mocha was used to test out NodeJS components and Socket.IO
    - Postman/Thunder Client was used to carry API tests

- Unit tests were unable to be written due to time constraints with the project.
- Integration testing was conducted to ensure that React components interact with the service 
  side of the project, in order to ensure functionality between frontend and backend
- The system will be presented to the client and tested during the process to showcase that everything works as expected

### Integration

- We utilized Github Actions in order to ensure that the code did not break when new features were merged into the master branch
- As part of the pull-request process, all tests with the project were required to pass. If 
  a single test did not pass then merging into the master branch was blocked until the failing test was investigated and fixed


|                           Unimplemented Features                              |
|Downloading of uploaded files was not implemented and part of the final build. |


|                             Known Bugs and Issues                             |          
|Registered Users Page      |   Individual roles are not displayed properly.    |

