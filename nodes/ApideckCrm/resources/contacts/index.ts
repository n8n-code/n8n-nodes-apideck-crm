import type { INodeProperties } from 'n8n-workflow';

export const contactsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					]
				}
			},
			"options": [
				{
					"name": "Contacts All",
					"value": "Contacts All",
					"action": "List contacts",
					"description": "List contacts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/crm/contacts"
						}
					}
				},
				{
					"name": "Contacts Add",
					"value": "Contacts Add",
					"action": "Create contact",
					"description": "Create contact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/crm/contacts"
						}
					}
				},
				{
					"name": "Contacts Delete",
					"value": "Contacts Delete",
					"action": "Delete contact",
					"description": "Delete contact",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/crm/contacts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Contacts One",
					"value": "Contacts One",
					"action": "Get contact",
					"description": "Get contact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/crm/contacts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Contacts Update",
					"value": "Contacts Update",
					"action": "Update contact",
					"description": "Update contact",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/crm/contacts/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /crm/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"company_id\": \"12345\",\n  \"email\": \"elon@tesla.com\",\n  \"first_name\": \"Elon\",\n  \"last_name\": \"Musk\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Apply sorting",
			"default": "{\n  \"by\": \"created_at\",\n  \"direction\": \"desc\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts All"
					]
				}
			}
		},
		{
			"displayName": "POST /crm/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "2000-08-12",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "string",
			"default": "23456",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "23456",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2017-08-12T20:43:21.291Z",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Current Balance",
			"name": "current_balance",
			"type": "number",
			"default": 10.5,
			"routing": {
				"send": {
					"property": "current_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "[\n  {\n    \"description\": \"Employee Level\",\n    \"id\": \"2389328923893298\",\n    \"name\": \"employee_level\",\n    \"value\": \"Uses Salesforce and Marketo\"\n  }\n]",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Department",
			"name": "department",
			"type": "string",
			"default": "Engineering",
			"routing": {
				"send": {
					"property": "department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Internal champion",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Email Domain",
			"name": "email_domain",
			"type": "string",
			"default": "gmail.com",
			"routing": {
				"send": {
					"property": "email_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Fax",
			"name": "fax",
			"type": "string",
			"default": "+12129876543",
			"routing": {
				"send": {
					"property": "fax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "First Call At",
			"name": "first_call_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "first_call_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "First Email At",
			"name": "first_email_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "first_email_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "female",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				},
				{
					"name": "Unisex",
					"value": "unisex"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "string",
			"default": "EN",
			"description": "language code according to ISO 639-1. For the United States - EN",
			"routing": {
				"send": {
					"property": "language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Last Activity At",
			"name": "last_activity_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "last_activity_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Lead ID",
			"name": "lead_id",
			"type": "string",
			"default": "34567",
			"routing": {
				"send": {
					"property": "lead_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Lead Source",
			"name": "lead_source",
			"type": "string",
			"default": "Cold Call",
			"routing": {
				"send": {
					"property": "lead_source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middle_name",
			"type": "string",
			"default": "D.",
			"routing": {
				"send": {
					"property": "middle_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Elon Musk",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "54321",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Photo URL",
			"name": "photo_url",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"description": "The URL of the photo of a person.",
			"routing": {
				"send": {
					"property": "photo_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "Mr.",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Social Links",
			"name": "social_links",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"twitter\",\n    \"url\": \"https://www.twitter.com/apideck-io\"\n  }\n]",
			"routing": {
				"send": {
					"property": "social_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "open",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Suffix",
			"name": "suffix",
			"type": "string",
			"default": "PhD",
			"routing": {
				"send": {
					"property": "suffix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"New\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "CEO",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "personal",
			"options": [
				{
					"name": "Customer",
					"value": "customer"
				},
				{
					"name": "Supplier",
					"value": "supplier"
				},
				{
					"name": "Employee",
					"value": "employee"
				},
				{
					"name": "Personal",
					"value": "personal"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2017-08-12T20:43:21.291Z",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "Websites",
			"name": "websites",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"primary\",\n    \"url\": \"http://example.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "websites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /crm/contacts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /crm/contacts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /crm/contacts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "2000-08-12",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "string",
			"default": "23456",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "23456",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2017-08-12T20:43:21.291Z",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Current Balance",
			"name": "current_balance",
			"type": "number",
			"default": 10.5,
			"routing": {
				"send": {
					"property": "current_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "[\n  {\n    \"description\": \"Employee Level\",\n    \"id\": \"2389328923893298\",\n    \"name\": \"employee_level\",\n    \"value\": \"Uses Salesforce and Marketo\"\n  }\n]",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Department",
			"name": "department",
			"type": "string",
			"default": "Engineering",
			"routing": {
				"send": {
					"property": "department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Internal champion",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Email Domain",
			"name": "email_domain",
			"type": "string",
			"default": "gmail.com",
			"routing": {
				"send": {
					"property": "email_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Fax",
			"name": "fax",
			"type": "string",
			"default": "+12129876543",
			"routing": {
				"send": {
					"property": "fax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "First Call At",
			"name": "first_call_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "first_call_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "First Email At",
			"name": "first_email_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "first_email_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "female",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				},
				{
					"name": "Unisex",
					"value": "unisex"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "string",
			"default": "EN",
			"description": "language code according to ISO 639-1. For the United States - EN",
			"routing": {
				"send": {
					"property": "language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Last Activity At",
			"name": "last_activity_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "last_activity_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Lead ID",
			"name": "lead_id",
			"type": "string",
			"default": "34567",
			"routing": {
				"send": {
					"property": "lead_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Lead Source",
			"name": "lead_source",
			"type": "string",
			"default": "Cold Call",
			"routing": {
				"send": {
					"property": "lead_source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middle_name",
			"type": "string",
			"default": "D.",
			"routing": {
				"send": {
					"property": "middle_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Elon Musk",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "54321",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Photo URL",
			"name": "photo_url",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"description": "The URL of the photo of a person.",
			"routing": {
				"send": {
					"property": "photo_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "Mr.",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Social Links",
			"name": "social_links",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"twitter\",\n    \"url\": \"https://www.twitter.com/apideck-io\"\n  }\n]",
			"routing": {
				"send": {
					"property": "social_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "open",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Suffix",
			"name": "suffix",
			"type": "string",
			"default": "PhD",
			"routing": {
				"send": {
					"property": "suffix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"New\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "CEO",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "personal",
			"options": [
				{
					"name": "Customer",
					"value": "customer"
				},
				{
					"name": "Supplier",
					"value": "supplier"
				},
				{
					"name": "Employee",
					"value": "employee"
				},
				{
					"name": "Personal",
					"value": "personal"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2017-08-12T20:43:21.291Z",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Websites",
			"name": "websites",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"primary\",\n    \"url\": \"http://example.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "websites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts"
					],
					"operation": [
						"Contacts Update"
					]
				}
			}
		},
];
