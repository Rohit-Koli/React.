// import './App.css'
import Info from "./components/Day01/Info"
import FunctionComponent from "./components/Day01/FunctionComponent"
import Welcome from "./components/Day01/Welcome"
import UserCard from "./components/Day01/UserCard"
import WelcomeMessage from "./components/Day01/WelcomeMessage"
import UserStatus from "./components/Day01/UserStatus"
import Product from "./components/Day01/Product"
import ThemeButton from "./components/Day01/ThemeButton"
import ProfileCard from "./components/Day01/ProfileCard"
import Notification from "./components/Day01/AdvancedTasks/Notification"
import UserDetails from "./components/Day01/AdvancedTasks/UserDetails"
import PricingPlan from "./components/Day01/AdvancedTasks/PricingPlan"
import TaskList from "./components/Day01/TaskList"
import DynamicWeatherCard from "./components/Day01/AdvancedTasks/DynamicWeatherCard"
import ProductReviewComponent from "./components/Day01/AdvancedTasks/ProductReviewComponent"
import MovieRatingComponent from "./components/Day01/AdvancedTasks/MovieRatingComponent"
import ShoppingCard from "./components/Day01/AdvancedTasks/ShoppingCard"

let usersData = [
  { name: "Rohit", email: "rohit@example.com", isAdmin: true },
  { name: "John", email: "john@example.com", isAdmin: false },
  { name: "Sarah", email: "sarah@example.com", isAdmin: true },
  { name: "Emma", email: "emma@example.com", isAdmin: false },
];

let features=[
  {storage:"Unlimited storage",support:"Priority support",more:"Custom branding"},
  {storage:"500 storage",support:"Email support",more:"Analytics dashboard"}
]

let taskList=[
  {title:"Finish React project",isCompleted:true},
  {title:"Workout",isCompleted:false}
]

let weatherCondition=["Sunny","Rainy","Cloudy"]

let shopingItemsList=[
  {name:"iPhone 14",price:999 ,quantity:2},
  {name:"MacBook Pro",price:1999 ,quantity:1},
  {name:"AirPods",price:199 ,quantity:3},
]

function App() {

  return (
    <>
      {/* <FunctionComponent /> */}
      {/* //String Should be in double quote and INteger shouildf be in { } this ! */}
      {/* <Welcome name="Rohit" age={34}/> */}
      {/* <UserCard name="John Doe" age={34} location="Washington DC"/> */}
      {/* <WelcomeMessage username="John Wick " /> */}
      {/* <WelcomeMessage /> */}
      {/* <UserStatus isLoggedIn={true} /> */}
      {/* <UserStatus isLoggedIn={false} /> */}
      {/* <Product name="XIOMI" price={32000} inStock={true} /> */}
      {/* <Product name="APPLE" price={42000} inStock={false} /> */}
      {/* <ThemeButton isDarkMode={true}/> */}
      {/* <ThemeButton isDarkMode={false}/> */}
      {/* <ProfileCard name={"John Doe"} bio={"dev"} isOnline={true}/> */}
      {/* <ProfileCard name={"John Doe"} bio={"dev"} isOnline={false}/> */}
      {/* <Notification type={"Warning"} message={"Data saved successfully!"} timestamp={"[12:30 PM]"} /> */}
      {/* <Notification type={"Success"} message={"Low disk space!"} timestamp={"[12:40 PM]"} /> */}
      {/* <Notification type={"Error"} message={"Failed to load data!"} timestamp={"[12:35 PM]"} /> */}
      {/* <UserDetails users={usersData} />       */}

      {/* {Failed Tasks Below:} */}
      {/* <PricingPlan planName={"Business Plan"} price={19.99} fetures={features[1]} /> */}
      {/* <PricingPlan planName={"Premium Plan"} price={29.99} fetures={features[0]} /> */}

      {/* <TaskList tasks={taskList}/> */}
      {/* <DynamicWeatherCard city={"Mumbai"} conditions={weatherCondition[0]} temprature={32}/> */}
      {/* <DynamicWeatherCard city={"Delhi"} conditions={weatherCondition[2]} temprature={26}/> */}
      {/* <DynamicWeatherCard city={"Shirpur"} conditions={weatherCondition[1]} temprature={18}/> */}
      {/* <ProductReviewComponent productName={"IPHONE 15"} rating={4} review={"Good Electronic Device "}/> */}
      {/* <ProductReviewComponent productName={"IPHONE 14"} rating={5} review={"Good Electronic Device "}/> */}
      {/* <ProductReviewComponent productName={"IPHONE 13"} rating={1} review={"Good Electronic Device "}/> */}
      {/* <ProductReviewComponent productName={"IPHONE 12"} rating={2} review={"Good Electronic Device4"}/> */}
      {/* <ProductReviewComponent productName={"IPHONE X"} rating={3} review={"Good Electronic Device4"}/> */}
      {/* <MovieRatingComponent movieName={"Inception"} rating={9} genre={"Sci-Fi"}/> */}
      {/* <MovieRatingComponent movieName={"Titanic"} rating={8} genre={"Romance"}/> */}
      {/* <MovieRatingComponent movieName={"Joker"} rating={9.5} genre={"Drama"}/> */}
      {/* <ShoppingCard shoppingItemsList={shopingItemsList}/> */}
      {/* Day 01 All Tasks Completed !!! */}

      {/* Day 02 Tasks : */}
      

    </>
  )
}

export default App
