/**
 * Service to handle Render API interactions using native fetch
 */
class RenderService {
  constructor() {
    this.baseUrl = 'https://api.render.com/v1';
  }

  /**
   * Retrieves all services from Render
   * @returns {Promise<Array>} List of services
   */
  async getServices() {
    try {
      const apiKey = process.env.RENDER_API_KEY;
      
      if (!apiKey) {
        throw new Error('RENDER_API_KEY is not defined');
      }

      const response = await fetch(`${this.baseUrl}/services?includePreviews=true&limit=20`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Render API error (${response.status}): ${errorData.message || response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching services from Render API:', error.message);
      throw error;
    }
  }
}

module.exports = new RenderService();
