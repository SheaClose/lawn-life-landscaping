import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Photos from "./components/Photos/Photos"

export default (
	<Switch>
		<Route
			component={ Landing }
			exact
			path="/"
		/>
    <Route
      component={ Contact }
      path="/contact"
    />
    <Route
      component={ Services }
      path="/services"
    />
    <Route
      component={ Booking }
      path="/booking"
    />
    <Route
      component={ Testimonials }
      path="/testimonials"
    />
    <Route
      component={ Photos }
      path="/photos"
    />
	</Switch>
)
