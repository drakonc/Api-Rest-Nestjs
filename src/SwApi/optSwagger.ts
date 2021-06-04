import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

export class SwaggerTarget {

    private app;

    constructor(app) {
        this.app = app;
    }

    public Start() {
        this.SWGenetral();
    }

    private async SWGenetral(): Promise<void> {
        const options = new DocumentBuilder()
            .setTitle('Api Infraestructura')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'Token' }, 'access-token')
            .build();

        const document = SwaggerModule.createDocument(this.app, options);
        SwaggerModule.setup('swApi', this.app, document, { swaggerOptions: { filter: true, showRequestDuration: true } });
        Logger.log('Mapped {/swApi, GET} router', 'RouterSwagger');
    }
}