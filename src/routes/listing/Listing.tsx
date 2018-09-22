import * as React from "react";
import { Link, Switch, Route, navigate } from "fuse-react";
import "./Listing.scss";
import { ListingA } from "./listing-a/ListingA";

export class Listing extends React.Component {
	public render() {
		return (
			<div className="page listing">
				<h1>Listing with sub route</h1>
				<div>
					<Link activeClassName="active" to="/listing/a">
						Listing a
					</Link>
				</div>
				<div>
					<Link activeClassName="active" to="/listing/b">
						Listing b
					</Link>
				</div>

				<Switch placeholder={<div>Loading</div>}>
					<Route path="/listing" exact component={()=> navigate("/listing/a")} />
					<Route path="/listing/a" component={ListingA} />
					<Route path="/listing/b" component={() => import("./listing-b/ListingB")} />
				</Switch>
			</div>
		);
	}
}

				// alternate/original example without default active styles
				// <Switch placeholder={<div>Loading</div>}>
				// 	<Route path="/listing/a" component={ListingA} />
				// 	<Route path="/listing/b" component={() => import("./listing-b/ListingB")} />
				// </Switch>