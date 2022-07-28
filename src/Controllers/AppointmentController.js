const Appointment = require("../Models/Appointment");

module.exports = {
  
  async createAppointment(name, id_user, id_doctor, date, hour, feedback) {
    try {
      const newAppointment = await Appointment.create({name, id_user, id_doctor, date, hour, feedback,});
      return { message: newAppointment, status: 200 };
    } catch (error) {
      return { message: error, status: 400 };
    }
  },

  async getAllAppointments() {
    try {
      const Appointments = await Appointment.find();
      console.log(Appointments);
      return { Appointments, status: 200 };
    } catch (error) {
      return { message: error, status: 400 };
    }
  }, // ADM

  async getAppointmentByUser(User) {
    try {
      const appointmentByUser = await Appointment.find({ id_user: User });
      return { message: appointmentByUser, status: 200 };
    } catch (error) {
      return { message: error, status: 400 };
    }
  }, // ADM / User

  async getAppointmentByDoctor(Doctor) {
    try {
      const appointmentByDoctor = await Appointment.find({ id_doctor: Doctor });
      return { message: appointmentByDoctor, status: 200 };
    } catch (error) {
      return { message: error, status: 400 };
    }
  }, // ADM / User

  async updateAppointment(id) {
    try{
      const modifyAppointmente = await Appointment.findByIdAndUpdate(id, req.body, {new: true,});
      return { message: modifyAppointmente, status: 200 };
        // Vai receber todos os campos que precisem ser atualizados através do BODY
    }catch (error){
      return { message: error, status: 400 };
    }
  },

  async deleteAppointment(id) {
    try {
      const removeAppointment = await Appointment.findByIdAndRemove(id);
      return { message: removeAppointment, status: 200 };
    } catch (error) {
      return { message: error, status: 400 };
    }
  },

  async getAppointmentFeedback(id_doctor) {
    try{
      const appointmentFeedback = await Appointment.find(id_doctor);
      return { message: appointmentFeedback, status: 200};
    }catch(error){
      return { message: error, status: 400};
    }
  },

  async login() {}, // Referente a autenticação
};