import React from "react";
import "../pages/styles/BadgesList.css";
import tw_logo from "../images/twitter-logo.png";

class BadgesList extends React.Component {
	render() {
		return (
			<ul className='list-unstyled'>
				{this.props.badges.map(badges => {
					return (
						<li key={badges.id} className='Badge_section-name-list'>
							<img src={badges.avatarUrl} className='Badge_avatar-list' />
							<div>
								{badges.firstName} {badges.lastName}
								<br />
								{badges.jobTitle}
								<br />
								<img src={tw_logo} className='tw_logo' />
								<span className='twitter_blue_font'>{badges.twitter}</span>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgesList;