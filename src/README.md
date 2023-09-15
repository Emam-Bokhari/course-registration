## Project Features

- **Features 01:** Course Selection

  - Description: Users click on a "Select" button associated with each course they want to add to their cart.

  Adding Courses to Cart:
  When a user clicks the "Select" button for a specific course, that course is added to their cart.

  Displaying Course Names:
  As courses are added to the cart, the names of the selected courses are displayed to the user in a list.

- **Features 02:** Total Price Calculation

  - Description: The course catalog has a specific price associated with it.

  Updating Total Price:
  Courses from their cart, the total price is dynamically updated. This means summing up the prices of all the courses currently in the cart.

  Displaying Total Price:
  The calculated total price is displayed in the cart view, so users can easily see the cost of their selected courses.

- **Features 03:** Credit Calculation

  - Description: When users select courses for their cart, the system sums up the credits associated with each selected course. The total credit is displayed in the cart view.

  Credit Limit:
  Each user is allocated a maximum of 20 hours of credit.

  Toast Message:
  If the total credit is more than 20 hours, a toast message is displayed to notify the user.

  Credit Subtraction:
<<<<<<< HEAD
  The remaining credit will be subtracted from the total credit hours and displayed in the cart view.

## Manage state of the project

- **App component:**

  - Description: The App component serves as the main entry point of the application. It manages the following pieces of state:
  selectCourse: An array that holds the selected courses.
  totalCredit: Keeps track of the total credit hours of the selected courses.
  totalRemainingCredit: Represents the remaining credit hours available (initialized to 20).
  totalCoursePrice: Tracks the total price of the selected courses.

  These states are initialized using the useState hook. The addCourse function is defined to handle the addition of courses to the selectCourse array and updates the related state variables based on the selected course's credit hours and price. It also provides toast messages for certain conditions like adding duplicate courses or exceeding the credit limit.

- **Courses Component:**

  - Description: The Courses component is responsible for fetching and displaying a list of available courses. It uses the useState hook to manage the courses state, which is initialized as an empty array. The useEffect hook is used to fetch course data from the "courseData.json" file when the component mounts and updates the courses state accordingly.

  Each course item is mapped and rendered using the Course component. The addCourse function is passed as a prop to the Course component so that when a course is selected, it can be added to the selectCourse array in the App component.

- **Course Component:**

  - Description: The Course component represents an individual course item. It receives the course data and the addCourse function as props. When the "Select" button is clicked, the handleSelectCourse function is called, which in turn calls the addCourse function passed as a prop to add the course to the selectCourse array in the App component.

- **Carts Component:**

  - Description: The Carts component displays the selected courses, their total credit hours, remaining credit hours, and the total course price. It receives these values as props from the App component and renders them accordingly. The selected courses are mapped to Cart components.

- **Cart Component:**

  - Description: The Cart component represents an individual selected course item within the Carts component. It is responsible for displaying the course name.

  Overall, the project follows a common state management pattern in React, where the state is managed using the useState hook at the component level, and functions are passed down as props to handle state updates. This approach allows to keep track of selected courses, their credit hours, and prices while maintaining a responsive and interactive user interface.
=======
  The remaining credit will be subtracted from the total credit hours and displayed in the cart view
>>>>>>> 99caaaee4fdd98cbf38f7c9d102aee330c9cab69
