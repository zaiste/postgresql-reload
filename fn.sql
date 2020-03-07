function app.person_name(person app.person) returns text as $$
select
  person.first_name || ' ' || person.last_name $$ language sql stable;