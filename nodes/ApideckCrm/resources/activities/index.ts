import type { INodeProperties } from 'n8n-workflow';

export const activitiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					]
				}
			},
			"options": [
				{
					"name": "Activities All",
					"value": "Activities All",
					"action": "List activities",
					"description": "List activities",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/crm/activities"
						}
					}
				},
				{
					"name": "Activities Add",
					"value": "Activities Add",
					"action": "Create activity",
					"description": "Create activity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/crm/activities"
						}
					}
				},
				{
					"name": "Activities Delete",
					"value": "Activities Delete",
					"action": "Delete activity",
					"description": "Delete activity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/crm/activities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Activities One",
					"value": "Activities One",
					"action": "Get activity",
					"description": "Get activity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/crm/activities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Activities Update",
					"value": "Activities Update",
					"action": "Update activity",
					"description": "Update activity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/crm/activities/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /crm/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"updated_since\": \"2020-09-30T07:43:32.000Z\"\n}",
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
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
						"Activities"
					],
					"operation": [
						"Activities All"
					]
				}
			}
		},
		{
			"displayName": "POST /crm/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Activity Date",
			"name": "activity_date",
			"type": "string",
			"default": "2021-05-01",
			"routing": {
				"send": {
					"property": "activity_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Activity Datetime",
			"name": "activity_datetime",
			"type": "string",
			"default": "2021-05-01T12:00:00.000Z",
			"routing": {
				"send": {
					"property": "activity_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "All Day Event",
			"name": "all_day_event",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "all_day_event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Archived",
			"name": "archived",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "archived",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Asset ID",
			"name": "asset_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "asset_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Attendees",
			"name": "attendees",
			"type": "json",
			"default": "[\n  {\n    \"contact_id\": \"12345\",\n    \"created_at\": \"2017-08-12T20:43:21.291Z\",\n    \"email_address\": \"elon@musk.com\",\n    \"first_name\": \"Elon\",\n    \"id\": \"12345\",\n    \"is_organizer\": true,\n    \"last_name\": \"Musk\",\n    \"middle_name\": \"D.\",\n    \"name\": \"Elon Musk\",\n    \"prefix\": \"Mr.\",\n    \"status\": \"accepted\",\n    \"suffix\": \"PhD\",\n    \"updated_at\": \"2017-08-12T20:43:21.291Z\",\n    \"user_id\": \"12345\"\n  }\n]",
			"routing": {
				"send": {
					"property": "attendees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Campaign ID",
			"name": "campaign_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "campaign_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Case ID",
			"name": "case_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "case_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Child",
			"name": "child",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "child",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "string",
			"default": "12345",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contact_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "contact_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Contract ID",
			"name": "contract_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "contract_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Custom Object ID",
			"name": "custom_object_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "custom_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "deleted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "More info about the meeting",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Done",
			"name": "done",
			"type": "boolean",
			"default": false,
			"description": "Whether the Activity is done or not",
			"routing": {
				"send": {
					"property": "done",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Downstream ID",
			"name": "downstream_id",
			"type": "string",
			"default": "12345",
			"description": "The third-party API ID of original entity",
			"routing": {
				"send": {
					"property": "downstream_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Duration Minutes",
			"name": "duration_minutes",
			"type": "number",
			"default": 30,
			"routing": {
				"send": {
					"property": "duration_minutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Duration Seconds",
			"name": "duration_seconds",
			"type": "number",
			"default": 1800,
			"routing": {
				"send": {
					"property": "duration_seconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "2021-05-01",
			"routing": {
				"send": {
					"property": "end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "End Datetime",
			"name": "end_datetime",
			"type": "string",
			"default": "2021-05-01T12:30:00.000Z",
			"routing": {
				"send": {
					"property": "end_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Event Sub Type",
			"name": "event_sub_type",
			"type": "string",
			"default": "debrief",
			"routing": {
				"send": {
					"property": "event_sub_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Group Event",
			"name": "group_event",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "group_event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Group Event Type",
			"name": "group_event_type",
			"type": "string",
			"default": "Proposed",
			"routing": {
				"send": {
					"property": "group_event_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Lead ID",
			"name": "lead_id",
			"type": "string",
			"default": "12345",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "Space",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Location Address",
			"name": "location_address",
			"type": "json",
			"default": "{\n  \"city\": \"San Francisco\",\n  \"contact_name\": \"Elon Musk\",\n  \"country\": \"US\",\n  \"county\": \"Santa Clara\",\n  \"email\": \"elon@musk.com\",\n  \"fax\": \"122-111-1111\",\n  \"id\": \"123\",\n  \"latitude\": \"40.759211\",\n  \"line1\": \"Main street\",\n  \"line2\": \"apt #\",\n  \"line3\": \"Suite #\",\n  \"line4\": \"delivery instructions\",\n  \"longitude\": \"-73.984638\",\n  \"name\": \"HQ US\",\n  \"phone_number\": \"111-111-1111\",\n  \"postal_code\": \"94104\",\n  \"row_version\": \"1-12345\",\n  \"salutation\": \"Mr\",\n  \"state\": \"CA\",\n  \"street_number\": \"25\",\n  \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n  \"type\": \"primary\",\n  \"website\": \"https://elonmusk.com\"\n}",
			"routing": {
				"send": {
					"property": "location_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "An internal note about the meeting",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Opportunity ID",
			"name": "opportunity_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "opportunity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "12345",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Private",
			"name": "private",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "private",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "product_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Recurrent",
			"name": "recurrent",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "recurrent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Reminder Datetime",
			"name": "reminder_datetime",
			"type": "string",
			"default": "2021-05-01T17:00:00.000Z",
			"routing": {
				"send": {
					"property": "reminder_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Reminder Set",
			"name": "reminder_set",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "reminder_set",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Show As",
			"name": "show_as",
			"type": "options",
			"default": "busy",
			"options": [
				{
					"name": "Free",
					"value": "free"
				},
				{
					"name": "Busy",
					"value": "busy"
				}
			],
			"routing": {
				"send": {
					"property": "show_as",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Solution ID",
			"name": "solution_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "solution_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Start Datetime",
			"name": "start_datetime",
			"type": "string",
			"default": "2021-05-01T12:00:00.000Z",
			"routing": {
				"send": {
					"property": "start_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Meeting",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "meeting",
			"options": [
				{
					"name": "Call",
					"value": "call"
				},
				{
					"name": "Meeting",
					"value": "meeting"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Note",
					"value": "note"
				},
				{
					"name": "Task",
					"value": "task"
				},
				{
					"name": "Deadline",
					"value": "deadline"
				},
				{
					"name": "Send Letter",
					"value": "send-letter"
				},
				{
					"name": "Send Quote",
					"value": "send-quote"
				},
				{
					"name": "Other",
					"value": "other"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Video Conference ID",
			"name": "video_conference_id",
			"type": "string",
			"default": "zoom:88120759396",
			"routing": {
				"send": {
					"property": "video_conference_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "Video Conference URL",
			"name": "video_conference_url",
			"type": "string",
			"default": "https://us02web.zoom.us/j/88120759396",
			"routing": {
				"send": {
					"property": "video_conference_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Add"
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
						"Activities"
					],
					"operation": [
						"Activities Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /crm/activities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Delete"
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
						"Activities"
					],
					"operation": [
						"Activities Delete"
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
						"Activities"
					],
					"operation": [
						"Activities Delete"
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
						"Activities"
					],
					"operation": [
						"Activities Delete"
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
						"Activities"
					],
					"operation": [
						"Activities Delete"
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
						"Activities"
					],
					"operation": [
						"Activities Delete"
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
						"Activities"
					],
					"operation": [
						"Activities Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /crm/activities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
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
						"Activities"
					],
					"operation": [
						"Activities One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /crm/activities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Activity Date",
			"name": "activity_date",
			"type": "string",
			"default": "2021-05-01",
			"routing": {
				"send": {
					"property": "activity_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Activity Datetime",
			"name": "activity_datetime",
			"type": "string",
			"default": "2021-05-01T12:00:00.000Z",
			"routing": {
				"send": {
					"property": "activity_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "All Day Event",
			"name": "all_day_event",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "all_day_event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Archived",
			"name": "archived",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "archived",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Asset ID",
			"name": "asset_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "asset_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Attendees",
			"name": "attendees",
			"type": "json",
			"default": "[\n  {\n    \"contact_id\": \"12345\",\n    \"created_at\": \"2017-08-12T20:43:21.291Z\",\n    \"email_address\": \"elon@musk.com\",\n    \"first_name\": \"Elon\",\n    \"id\": \"12345\",\n    \"is_organizer\": true,\n    \"last_name\": \"Musk\",\n    \"middle_name\": \"D.\",\n    \"name\": \"Elon Musk\",\n    \"prefix\": \"Mr.\",\n    \"status\": \"accepted\",\n    \"suffix\": \"PhD\",\n    \"updated_at\": \"2017-08-12T20:43:21.291Z\",\n    \"user_id\": \"12345\"\n  }\n]",
			"routing": {
				"send": {
					"property": "attendees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Campaign ID",
			"name": "campaign_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "campaign_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Case ID",
			"name": "case_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "case_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Child",
			"name": "child",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "child",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "string",
			"default": "12345",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contact_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "contact_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Contract ID",
			"name": "contract_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "contract_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Object ID",
			"name": "custom_object_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "custom_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "deleted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "More info about the meeting",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Done",
			"name": "done",
			"type": "boolean",
			"default": false,
			"description": "Whether the Activity is done or not",
			"routing": {
				"send": {
					"property": "done",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Downstream ID",
			"name": "downstream_id",
			"type": "string",
			"default": "12345",
			"description": "The third-party API ID of original entity",
			"routing": {
				"send": {
					"property": "downstream_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Duration Minutes",
			"name": "duration_minutes",
			"type": "number",
			"default": 30,
			"routing": {
				"send": {
					"property": "duration_minutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Duration Seconds",
			"name": "duration_seconds",
			"type": "number",
			"default": 1800,
			"routing": {
				"send": {
					"property": "duration_seconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "2021-05-01",
			"routing": {
				"send": {
					"property": "end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "End Datetime",
			"name": "end_datetime",
			"type": "string",
			"default": "2021-05-01T12:30:00.000Z",
			"routing": {
				"send": {
					"property": "end_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Event Sub Type",
			"name": "event_sub_type",
			"type": "string",
			"default": "debrief",
			"routing": {
				"send": {
					"property": "event_sub_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Group Event",
			"name": "group_event",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "group_event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Group Event Type",
			"name": "group_event_type",
			"type": "string",
			"default": "Proposed",
			"routing": {
				"send": {
					"property": "group_event_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Lead ID",
			"name": "lead_id",
			"type": "string",
			"default": "12345",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "Space",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Location Address",
			"name": "location_address",
			"type": "json",
			"default": "{\n  \"city\": \"San Francisco\",\n  \"contact_name\": \"Elon Musk\",\n  \"country\": \"US\",\n  \"county\": \"Santa Clara\",\n  \"email\": \"elon@musk.com\",\n  \"fax\": \"122-111-1111\",\n  \"id\": \"123\",\n  \"latitude\": \"40.759211\",\n  \"line1\": \"Main street\",\n  \"line2\": \"apt #\",\n  \"line3\": \"Suite #\",\n  \"line4\": \"delivery instructions\",\n  \"longitude\": \"-73.984638\",\n  \"name\": \"HQ US\",\n  \"phone_number\": \"111-111-1111\",\n  \"postal_code\": \"94104\",\n  \"row_version\": \"1-12345\",\n  \"salutation\": \"Mr\",\n  \"state\": \"CA\",\n  \"street_number\": \"25\",\n  \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n  \"type\": \"primary\",\n  \"website\": \"https://elonmusk.com\"\n}",
			"routing": {
				"send": {
					"property": "location_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "An internal note about the meeting",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Opportunity ID",
			"name": "opportunity_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "opportunity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "12345",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Private",
			"name": "private",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "private",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "product_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "product_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Recurrent",
			"name": "recurrent",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "recurrent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Reminder Datetime",
			"name": "reminder_datetime",
			"type": "string",
			"default": "2021-05-01T17:00:00.000Z",
			"routing": {
				"send": {
					"property": "reminder_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Reminder Set",
			"name": "reminder_set",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "reminder_set",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Show As",
			"name": "show_as",
			"type": "options",
			"default": "busy",
			"options": [
				{
					"name": "Free",
					"value": "free"
				},
				{
					"name": "Busy",
					"value": "busy"
				}
			],
			"routing": {
				"send": {
					"property": "show_as",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Solution ID",
			"name": "solution_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "solution_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Start Datetime",
			"name": "start_datetime",
			"type": "string",
			"default": "2021-05-01T12:00:00.000Z",
			"routing": {
				"send": {
					"property": "start_datetime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Meeting",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "meeting",
			"options": [
				{
					"name": "Call",
					"value": "call"
				},
				{
					"name": "Meeting",
					"value": "meeting"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Note",
					"value": "note"
				},
				{
					"name": "Task",
					"value": "task"
				},
				{
					"name": "Deadline",
					"value": "deadline"
				},
				{
					"name": "Send Letter",
					"value": "send-letter"
				},
				{
					"name": "Send Quote",
					"value": "send-quote"
				},
				{
					"name": "Other",
					"value": "other"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Video Conference ID",
			"name": "video_conference_id",
			"type": "string",
			"default": "zoom:88120759396",
			"routing": {
				"send": {
					"property": "video_conference_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
		{
			"displayName": "Video Conference URL",
			"name": "video_conference_url",
			"type": "string",
			"default": "https://us02web.zoom.us/j/88120759396",
			"routing": {
				"send": {
					"property": "video_conference_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"Activities Update"
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
						"Activities"
					],
					"operation": [
						"Activities Update"
					]
				}
			}
		},
];
