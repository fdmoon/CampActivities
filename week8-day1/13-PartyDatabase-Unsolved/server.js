var orm = require("./config/orm.js");

// Find all parties, ordering them by party cost
// Find partie15.s by the name of the party
// Find the client with the most parties
// BONUS: create a function within your ORM that will let the user add more clients and parties to the database.

orm.selectAndOrder('*', 'parties', 'party_cost');

orm.selectWhere('parties', 'party_type', 'grown-up');

orm.findWhoHasMost('client_name', 'client_id', 'clients', 'parties');

