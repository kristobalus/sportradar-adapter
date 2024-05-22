export enum BaseballEvents {
    GameLevel = 'baseball.game.level', // game level state
    InningNumber = 'baseball.inningNumber', // inning number
    InningHalf = 'baseball.inningHalf', // top or bottom half of the inning
    SequenceNumber = 'baseball.sequenceNumber', // sequence number
    GamePointsHome = 'baseball.game.points.home', // game points of home team
    GamePointsAway = 'baseball.game.points.away', // game points of away team
    TotalPoints = 'baseball.game.points.total', // total game points
    Player = 'baseball.player', // refers to player id
    Team = 'baseball.team', // refers to team id
    TeamFirstBasket = 'baseball.team.first_basket', // refers to team id (analogous concept)
    TeamWin = 'baseball.team.win', // refers to team id
    TeamLoss = 'baseball.team.loss', // refers to team id
    PlayerBatter = 'baseball.player.batter', // refers to batter id
    PlayerPitcher = 'baseball.player.pitcher', // refers to pitcher id
    TeamBatter = 'baseball.team.batter', // refers to batter team id
    TeamPitcher = 'baseball.team.pitcher', // refers to pitcher team id
    GameStrikes = 'baseball.game.state.strikes', // number of strikes
    GameBalls = 'baseball.game.state.balls', // number of balls
    GameOuts = 'baseball.game.state.outs', // number of outs
    GamePitches = 'baseball.game.state.pitches', // number of pitches
    ScoreDifferential = 'baseball.score.differential', // score differential
    AtBatOutcomes = 'baseball.atbat.outcomes', // at-bat outcomes
    PitchOutcomes = 'baseball.pitch.outcomes', // pitch outcomes
    PitchSpeed = 'baseball.pitch.speed', // pitch speed
    PitchType = 'baseball.pitch.type', // pitch type
    PitchZone = 'baseball.pitch.zone', // pitch zone
    PitchX = 'baseball.pitch.x', // pitch X coordinate
    PitchY = 'baseball.pitch.y', // pitch Y coordinate
    ScoreHome = 'baseball.score.home', // score for home team
    ScoreAway = 'baseball.score.away', // score for away team
    TeamTimeout = 'baseball.team.timeout',
}
