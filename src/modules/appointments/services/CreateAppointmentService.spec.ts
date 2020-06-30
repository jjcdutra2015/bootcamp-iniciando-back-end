import AppError from '@shared/errors/AppError';
import FakesAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakesAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakesAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      provider_id: '123123',
      date: new Date(),
    });

    expect(appointment).toHaveProperty('id');
  });

  it('should not be able to create two appointments on the same time', async () => {
    await createAppointment.execute({
      provider_id: '123123',
      date: new Date(),
    });

    await expect(
      createAppointment.execute({
        provider_id: '123123',
        date: new Date(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
