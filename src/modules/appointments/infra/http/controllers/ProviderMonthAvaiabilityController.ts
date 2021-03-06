import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvaiabilityService from '@modules/appointments/services/ListProviderMonthAvaiabilityService';

export default class ProviderMonthAvaiabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listProviderMonthAvaiability = container.resolve(
      ListProviderMonthAvaiabilityService,
    );

    const avaiability = await listProviderMonthAvaiability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(avaiability);
  }
}
