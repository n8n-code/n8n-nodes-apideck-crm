import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { companiesDescription } from './resources/companies';
import { opportunitiesDescription } from './resources/opportunities';
import { leadsDescription } from './resources/leads';
import { contactsDescription } from './resources/contacts';
import { pipelinesDescription } from './resources/pipelines';
import { notesDescription } from './resources/notes';
import { usersDescription } from './resources/users';
import { activitiesDescription } from './resources/activities';

export class ApideckCrm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apideck Crm',
		name: 'N8nDevApideckCrm',
		icon: { light: 'file:./apideck-crm.png', dark: 'file:./apideck-crm.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'CRM API documentation.',
		defaults: { name: 'Apideck Crm' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApideckCrmApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Companies",
					"value": "Companies",
					"description": ""
				},
				{
					"name": "Opportunities",
					"value": "Opportunities",
					"description": ""
				},
				{
					"name": "Leads",
					"value": "Leads",
					"description": ""
				},
				{
					"name": "Contacts",
					"value": "Contacts",
					"description": ""
				},
				{
					"name": "Pipelines",
					"value": "Pipelines",
					"description": ""
				},
				{
					"name": "Notes",
					"value": "Notes",
					"description": ""
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				},
				{
					"name": "Activities",
					"value": "Activities",
					"description": ""
				}
			],
			"default": ""
		},
		...companiesDescription,
		...opportunitiesDescription,
		...leadsDescription,
		...contactsDescription,
		...pipelinesDescription,
		...notesDescription,
		...usersDescription,
		...activitiesDescription
		],
	};
}
