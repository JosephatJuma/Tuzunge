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
import User from "./app/main/User";
import { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [logging, SetLogging] = useState(false);
  const [selcetedId, setSelcetedId] = useState(0);
  const [selcetedCity, setSelcetedCity] = useState("");
  const [numberOfBookings, setNumber] = useState(0);

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
    return (
      <Home
        toWallet={() => navigation.navigate("My Wallet")}
        toProfile={() => navigation.navigate("Profile")}
        toEvents={() => navigation.navigate("Events")}
        toBook={() => navigation.navigate("My Bookings")}
        toPay={() => navigation.navigate("Select Payment Method")}
        toTrack={() => navigation.navigate("Vehicle Tracking")}
        toRecent={() => navigation.navigate("My Recent Trips")}
        toSupport={() => navigation.navigate("Local Support")}
        toTravel={() => navigation.navigate("My Travel Plan")}
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
  const BookingScreen = () => {
    const navigation = useNavigation();
    return (
      <Booking
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
  const TravelPlanScreen = () => {
    const nav = useNavigation();
    return <TravelPlan />;
  };
  const EventsScreen = () => {
    const navigation = useNavigation();
    return (
      <Events
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
    function getToHome() {
      if (!signedIn) {
        navigation.popToTop();
      } else {
      }
    }
    return (
      <Profile
        back={() => navigation.goBack()}
        goHome={() => navigation.navigate("Home")}
        goEvents={() => navigation.navigate("Events")}
        toBook={() => navigation.navigate("My Bookings")}
        toUser={() => navigation.navigate("User Account")}
        logoutFunction={() => {
          getToHome(), HandleLogout();
          //.then(getToHome);
        }}
      />
    );
  };
  const UserScreen = () => {
    return <User />;
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
    function getToHome() {
      navigation.popToTop();
    }
    return (
      <Login
        verifying={logging}
        goToForgot={() => navigation.navigate("Forgot Password")}
        //loginFunction={handleLogin}
        create={() => navigation.navigate("Select City")}
        loginFunction={() => {
          handleLogin().then(getToHome);
        }}
      />
    );
  };
  const ForgotScreen = () => {
    return <Forgot />;
  };
  const SignUpScreen = ({ navigation }) => {
    console.log(selcetedCity);
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

  const handleLogin = () => {
    SetLogging(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setSignedIn(true);
        SetLogging(false);
        resolve();
      }, 100);
    });
  };
  const HandleLogout = () => {
    try {
      function logout() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
            setSignedIn(false);
          }, 10);
        });
      }
      Alert.alert("Logout Alert!", "Are you sure you want to logout?", [
        {
          text: "cancel",
          onPress: () => {
            console.log("No!");
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
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="Get Started"
          component={signedIn ? HomeScreen : GetStartedScreen}
          options={{
            headerShown: false,
          }}
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
          name="Vehicle Tracking"
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
