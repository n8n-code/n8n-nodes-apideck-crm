# @n8n-dev/n8n-nodes-apideck-crm

![apideck-crm Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-apideck-crm.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-apideck-crm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing apideck-crm API integrations by hand.**

Every time you connect n8n to apideck-crm, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to apideck-crm took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Companies**, **Opportunities**, **Leads**, **Contacts**, **Pipelines**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-apideck-crm
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-apideck-crm`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **apideck-crm API** → paste your API key
3. Drag the **apideck-crm** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Companies</b> (5 operations)</summary>

- Get List companies
- Post Create company
- Delete company
- Get company
- Patch Update company

</details>

<details>
<summary><b>Opportunities</b> (5 operations)</summary>

- Get List opportunities
- Post Create opportunity
- Delete opportunity
- Get opportunity
- Patch Update opportunity

</details>

<details>
<summary><b>Leads</b> (5 operations)</summary>

- Get List leads
- Post Create lead
- Delete lead
- Get lead
- Patch Update lead

</details>

<details>
<summary><b>Contacts</b> (5 operations)</summary>

- Get List contacts
- Post Create contact
- Delete contact
- Get contact
- Patch Update contact

</details>

<details>
<summary><b>Pipelines</b> (5 operations)</summary>

- Get List pipelines
- Post Create pipeline
- Delete pipeline
- Get pipeline
- Patch Update pipeline

</details>

<details>
<summary><b>Notes</b> (5 operations)</summary>

- Get List notes
- Post Create note
- Delete note
- Get note
- Patch Update note

</details>

<details>
<summary><b>Users</b> (5 operations)</summary>

- Get List users
- Post Create user
- Delete user
- Get user
- Patch Update user

</details>

<details>
<summary><b>Activities</b> (5 operations)</summary>

- Get List activities
- Post Create activity
- Delete activity
- Get activity
- Patch Update activity

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from apideck-crm docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official apideck-crm OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **apideck-crm** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the apideck-crm API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
