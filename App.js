import * as ScreenOrientation from "expo-screen-orientation";
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Alert,
} from "react-native";
import { GestureResponderHandlers } from "react-native";
import { GestureResponderEvent } from "react-native";
import GetStarted from "./app/screens/GetStarted";
import { Country } from "./app/main/account/Country";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import Forgot from "./app/screens/Forgot";
import Home from "./app/main/Home";
import Wallet from "./app/main/Wallet";
import Profile from "./app/main/Profile";
import Events from "./app/main/Events";
import PaymetMethod from "./app/main/payment/PaymetMethod";
import MobileMoney from "./app/main/payment/MobileMoney";
import OTP from "./app/main/payment/OTP";
import { Track } from "./app/main/tracking/Track";
import { Booking } from "./app/main/booking/Booking";
import { RecentTrips } from "./app/main/recent/RecentTrips";
import { Support } from "./app/main/support/Support";
import { TravelPlan } from "./app/main/tracking/TravelPlan";
import { Notifications } from "./app/main/Notifications/Notifications";
import { Reviews } from "./app/main/reviews/Reviews";
import User from "./app/main/User";
import { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Firbase
import app from "./firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [logging, SetLogging] = useState(false);
  const [selcetedId, setSelcetedId] = useState(0);
  const [selcetedCity, setSelcetedCity] = useState("");
  const [numberOfBookings, setNumber] = useState(0);
  const [user, setUser] = useState();

  const [cities, setCities] = useState([
    { id: 1, name: "Kampala" },
    { id: 3, name: "Jinja" },
    { id: 4, name: "Mbale" },
    { id: 5, name: "Masaka" },
    { id: 6, name: "Wakiso" },
    { id: 7, name: "Lira" },
    { id: 8, name: "Gulu" },
    { id: 9, name: "Mukono" },
    { id: 10, name: "Arua" },
    { id: 11, name: "Mbarara" },
  ]);
  const selectCity = (id, name) => {
    //const c = cities.find((item) => item.id === id);
    if (id === selcetedId) {
      setSelcetedId(0);
      setSelcetedCity("");
      return;
    }
    setSelcetedId(id);
    // const city = c.name;
    setSelcetedCity(name);
  };

  const GetStartedScreen = ({ navigation }) => {
    return (
      <GetStarted
        toLogin={() => navigation.navigate("Login")}
        toSignUp={() => navigation.navigate("Select City")}
      />
    );
  };

  const HomeScreen = ({ navigation }) => {
    console.log(user);
    return (
      <Home
        name={user.name}
        toWallet={() => navigation.navigate("My Wallet")}
        toProfile={() => navigation.navigate("Profile")}
        toEvents={() => navigation.navigate("Events")}
        toBook={() => navigation.navigate("My Bookings")}
        toPay={() => navigation.navigate("Select Payment Method")}
        toTrack={() => navigation.navigate("Hotel Rooms")}
        toRecent={() => navigation.navigate("My Recent Trips")}
        toNotification={() => navigation.navigate("Notifications")}
        toTravel={() => navigation.navigate("My Travel Plan")}
        toReviws={() => navigation.navigate("Reviews")}
      />
    );
  };
  const WalletScreen = () => {
    const nav = useNavigation();
    return <Wallet toPay={() => nav.navigate("Select Payment Method")} />;
  };
  const TrackingScreen = () => {
    const nav = useNavigation();
    return <Track />;
  };
  const ReviewsScreen = () => {
    const nav = useNavigation();
    return <Reviews />;
  };
  const BookingScreen = () => {
    const navigation = useNavigation();
    return (
      <Booking
        userID={user.userID}
        toProfile={() => navigation.navigate("Profile")}
        toEvents={() => navigation.navigate("Events")}
        toHome={() => navigation.navigate("Home")}
        getNum={() => setNumber()}
      />
    );
  };
  const RecenttTripsScreen = () => {
    const nav = useNavigation();
    return <RecentTrips />;
  };
  const SupportScreen = () => {
    const nav = useNavigation();
    return <Support />;
  };
  const NotificationsScreen = () => {
    const nav = useNavigation();
    return <Notifications />;
  };
  const TravelPlanScreen = () => {
    const nav = useNavigation();
    return <TravelPlan />;
  };
  const EventsScreen = () => {
    const navigation = useNavigation();
    return (
      <Events
        userID={user.userID}
        toProfile={() => navigation.navigate("Profile")}
        toHome={() => navigation.navigate("Home")}
        toBook={() => navigation.navigate("My Bookings")}
        back={() => navigation.goBack()}
        num={numberOfBookings}
      />
    );
  };
  const ProfileScreen = () => {
    const navigation = useNavigation();
    const HandleLogout = () => {
      try {
        function logout() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
              setSignedIn(false);
              navigation.popToTop();
            }, 10);
          });
        }
        Alert.alert("Logout Alert!", "Are you sure you want to logout?", [
          {
            text: "cancel",
            onPress: () => {
              return;
            },
            style: "cancel",
          },
          {
            text: "ok",
            onPress: () => {
              return logout();
            },
          },
        ]);
      } catch (error) {
        console.log("error");
      }
    };

    return (
      <Profile
        email={user.email}
        back={() => navigation.goBack()}
        goHome={() => navigation.navigate("Home")}
        goEvents={() => navigation.navigate("Events")}
        toBook={() => navigation.navigate("My Bookings")}
        toUser={() => navigation.navigate("User Account")}
        logoutFunction={() => HandleLogout()}
      />
    );
  };
  const UserScreen = () => {
    return (
      <User
        email={user.email}
        id={user.userID}
        phone={user.phoneNumber}
        name={user.name}
      />
    );
  };
  const PaymentMethodScreen = () => {
    const navigation = useNavigation();
    return (
      <PaymetMethod toMoMo={() => navigation.push("Mobile Money Payment")} />
    );
  };
  const MoMoScreen = ({ navigation }) => {
    return <MobileMoney toOTP={() => navigation.push("Enter OTP")} />;
  };
  const OTPScreen = () => {
    return <OTP />;
  };

  const LoginScreen = () => {
    const navigation = useNavigation();
    const handleLogin = (email, password) => {
      SetLogging(true);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //check with firebase
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              setUser({
                userID: user.uid,
                name: user.displayName,
                phoneNumber: user.phoneNumber,
                email: user.email,
                verified: user.emailVerified,
              });
              console.log("Success");
            })
            .then(() => {
              navigation.popToTop();
              setSignedIn(true);
              SetLogging(false);
            })
            .catch((error) => {
              Alert.alert("Login Error!", error.code);
              console.log(error.message);
              SetLogging(false);
            });

          resolve();
        }, 100);
      });
    };
    const logInWithFacebook = () => {
      SetLogging(true);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setSignedIn(true);
          SetLogging(false);
          navigation.popToTop();
          resolve();
        }, 100);
      });
    };
    const logInWithGoogle = () => {
      SetLogging(true);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setSignedIn(true);
          SetLogging(false);
          navigation.popToTop();
          resolve();
        }, 100);
      });
    };
    return (
      <Login
        verifying={logging}
        goToForgot={() => navigation.navigate("Forgot Password")}
        //loginFunction={handleLogin}
        create={() => navigation.navigate("Select City")}
        loginFunction={handleLogin}
        loginWithFb={logInWithFacebook}
        loginWithGoogle={logInWithGoogle}
      />
    );
  };
  const ForgotScreen = () => {
    return <Forgot />;
  };
  const SignUpScreen = ({ navigation }) => {
    //console.log(selcetedCity);
    return (
      <SignUp
        loginInstead={() => navigation.navigate("Login")}
        myCity={selcetedCity}
      />
    );
  };

  const CountryScreen = ({ navigation }) => {
    return (
      <Country
        selcetedId={selcetedId}
        cities={cities}
        next={() => navigation.navigate("Set up Account")}
        setMyCity={selectCity}
      />
    );
  };

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const lock = async () =>
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
    lock();
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator animationType="fade">
        <Stack.Screen
          name="Get Started"
          component={signedIn ? HomeScreen : GetStartedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          screenOptions={{}}
          name="Notifications"
          component={NotificationsScreen}
          options={styles.headerOptions}
          gestureEnabled={true}
          gestureDirection="horizontal"
          //animationEnabled: true,
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            gestureDirection: "horizontal",
          }}
        />
        <Stack.Screen
          name="Select City"
          component={CountryScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Set up Account"
          component={SignUpScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="My Wallet"
          component={WalletScreen}
          options={{
            headerShown: true,
            headerTitleStyle: { color: "orange", fontWeight: "bold" },
            headerTintColor: "orange",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Select Payment Method"
          component={PaymentMethodScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Mobile Money Payment"
          component={MoMoScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Enter OTP"
          component={OTPScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Hotel Rooms"
          component={TrackingScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="My Bookings"
          component={BookingScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Local Support"
          component={SupportScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="My Recent Trips"
          component={RecenttTripsScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="My Travel Plan"
          component={TravelPlanScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="User Account"
          component={UserScreen}
          options={styles.headerOptions}
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={styles.headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerOptions: {
    headerShown: true,
    headerTitleStyle: { color: "orange", fontWeight: "bold" },
    headerTintColor: "orange",
  },
});
