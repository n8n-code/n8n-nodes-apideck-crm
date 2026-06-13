import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApideckCrmApi implements ICredentialType {
        name = 'N8nDevApideckCrmApi';

        displayName = 'Apideck Crm API';

        icon: Icon = { light: 'file:../nodes/ApideckCrm/apideck-crm.png', dark: 'file:../nodes/ApideckCrm/apideck-crm.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://unify.apideck.com',
                        required: true,
                        placeholder: 'https://unify.apideck.com',
                        description: 'The base URL of your Apideck Crm API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
