const { Client } = require('pg')
const client = new Client({ database: 'acme' })

const fn = `
CREATE OR REPLACE FUNCTION app.person_name(person app.person) RETURNS text AS $$
  select person.first_name || ' ' || person.last_name
$$ LANGUAGE sql STABLE;
`

const main = async () => {
  await client.connect()
  const res = await client.query(fn)
  await client.end()
}

main()