// Displays date in welcome message.
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Adds workout input to workout list.
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};
// Displays Workout routine on event listener's click
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

// Function to add new fitness goals, orders them in a list and prevent duplicate submissions which also trims
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');
    
    if (goalInput === '') {
        alert('Please enter a goal.');
        return;
    }

    const existingGoals = goalList.querySelectorAll('li');
    for (let goal of existingGoals) {
        if (goal.textContent.trim() === goalInput) {
            alert('This goal already exists.');
            return;
        }
    }

    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

// Event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);


// ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    
    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
    

///
// Water intake counter.
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Updates water intake on increase/decrease button click.
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Updates progress charts with workout and calorie intake.
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Toggles dark theme on theme toggle button click.
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Prevent default form submission and alert on meal plan submission.
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
