import { Model, STRING } from 'sequelize';
import db from '.';
import Match from './match';

class Team extends Model {
  // public <campo>!: <tipo>;
  id?: number;
  teamName: string;
}

Team.init({
  teamName: {
    type: STRING(40),
    allowNull: false,
    field: 'team_name',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

Team.hasMany(Match, { foreignKey: 'id', as: 'idHome' });

export default Team;
