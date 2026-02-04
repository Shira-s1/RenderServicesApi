const renderService = require('../services/renderService');

/**
 * Controller for Service-related endpoints
 */
class ServiceController {
  /**
   * GET /services
   * Returns a list of all Render services
   */
  async getServices(req, res) {
    try {
      console.log(`[${new Date().toISOString()}] GET /services request received`);
      const services = await renderService.getServices();
      
      res.status(200).json({
        success: true,
        data: services
      });
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Error in GET /services:`, error.message);
      
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve services from Render API',
        message: error.message
      });
    }
  }
}

module.exports = new ServiceController();
