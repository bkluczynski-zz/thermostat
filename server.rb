require 'sinatra'
require 'json'

class ThermaAPI < Sinatra::Base

  @@temp ||= 20
  @@psm  ||= true
  @@city ||= "London"

  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  get '/' do
    File.read(File.join('index.html'))
  end

  get '/temperature' do
    { temp: @@temp.to_i, psm: @@psm, city: @@city }.to_json
  end

  post '/temperature' do
    @@temp = params[:temp] if params[:temp]
    @@psm  = params[:psm] if params[:psm]
    @@city = params[:city] if params[:city]
    { status: 'ok' }.to_json
  end

  run! if app_file == $0
end
