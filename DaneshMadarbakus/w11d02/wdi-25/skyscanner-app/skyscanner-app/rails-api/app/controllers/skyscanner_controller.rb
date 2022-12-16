require 'date'

class SkyscannerController < ApplicationController
  def flights
    tommorow = Date.today + 1
    baseUrl = 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/UK/GBP/en-GB/LON/'

    response = HTTParty.get("#{baseUrl}#{params[:destination]}/#{tommorow}", {
      query: {
        apiKey: ENV["SKYSCANNER_API_KEY"]
      },
      headers: { 'Accept' => 'application/json'}
    })

  render json: response, status: :ok if response

  end
end
