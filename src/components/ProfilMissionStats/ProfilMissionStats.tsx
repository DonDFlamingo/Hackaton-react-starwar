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
		{ type: "Traque & capture", value: 54 },
		{ type: "Assassinat", value: 21 },
		{ type: "Renseignement", value: 15 },
		{ type: "Escorte", value: 10 },
	];

	return (
		<div className="missionsStatsGlobal">
			<div className="statsWrapper">
				<div className="missionStats">
					<h2>Statistique de mission</h2>
					<div className="missionDiv">
						<h3>Missions</h3>
						<p>{stats.total}</p>
					</div>
					<div className="missionDiv">
						<h3>Succès</h3>
						<p>{stats.success}</p>
					</div>
					<div className="missionDiv">
						<h3>Échecs</h3>
						<p>{stats.failure}</p>
					</div>
					<div className="missionDiv">
						<h3>Taux</h3>
						<p>{stats.successRate}</p>
					</div>
				</div>

				<div className="activityStats">
					<h2>Activité</h2>
					<ul className="activity-ul">
						<li className="activity-li">Capturés vivants : {bounty.alive}</li>
						<li className="activity-li">Éliminés : {bounty.eliminated}</li>
						<li className="activity-li">Échappés : {bounty.escaped}</li>
						<li className="activity-li">
							Plus grosse prime : {bounty.biggest}
						</li>
						<li className="activity-li">Gains : {bounty.earnings}</li>
					</ul>
				</div>

				<div className="typeMissions">
					<h2>Types de missions</h2>
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
