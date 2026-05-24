import "./ProfilMissionStats.css";
function ProfilMissionStats() {
	const stats = {
		total: 127,
		success: 118,
		failure: 9,
		successRate: "92.9%",
	};

	const bounty = {
		alive: 76,
		eliminated: 42,
		escaped: 9,
		biggest: "Han Solo",
		earnings: "4.8M credits",
	};

	const missions = [
		{ type: "Tracking & Capture", value: 54 },
		{ type: "Assassination", value: 21 },
		{ type: "Intelligence", value: 15 },
		{ type: "Escort", value: 10 },
	];

	return (
		<div className="missionsStatsGlobal">
			<div className="statsWrapper">
				<div className="missionStats">
					<h2 className="titleH2">Mission Statistics</h2>
					<hr className="titleHR"></hr>
					<div className="missionDiv">
						<h3 className="titleH3">Missions</h3>
						<p>{stats.total}</p>
					</div>
					<div className="missionDiv">
						<h3 className="titleH3">Successes</h3>
						<p>{stats.success}</p>
					</div>

					<div className="missionDiv">
						<h3 className="titleH3">Failures</h3>
						<p>{stats.failure}</p>
					</div>

					<div className="missionDiv">
						<h3 className="titleH3">Rate</h3>
						<p>{stats.successRate}</p>
					</div>
				</div>

				<div className="activityStats">
					<h2 className="titleH2">Activity</h2>
					<hr className="titleHR"></hr>
					<div className="activityStatsDiv">
						<span className="activity-span">Captured alive:</span>
						<p>{bounty.alive}</p>
					</div>
					<div className="activityStatsDiv">
						<span className="activity-span">Eliminated:</span>
						<p>{bounty.eliminated}</p>
					</div>
					<div className="activityStatsDiv">
						<span className="activity-span">Escaped:</span>
						<p>{bounty.escaped}</p>
					</div>
					<div className="activityStatsDiv">
						<span className="activity-span">Highest bounty:</span>
						<p>{bounty.biggest}</p>
					</div>
					<div className="activityStatsDiv">
						<span className="activity-span">Earnings:</span>
						<p>{bounty.earnings}</p>
					</div>
				</div>

				<div className="typeMissions">
					<h2 className="titleH2">Mission Types</h2>
					<hr className="titleHR"></hr>
					<div>
						{missions.map((m, i) => (
							<div className="missionTypeDiv" key={i}>
								<span className="textMissionDiv">{m.type}</span>
								<span className="textMissionDiv valueText">{m.value}%</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilMissionStats;
