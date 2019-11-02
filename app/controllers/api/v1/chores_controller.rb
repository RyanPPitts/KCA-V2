class Api::V1::ChoresController < Api::V1::BaseController
 
def index
    respond_with Chore.all
end

def create
    respond_with :api, :v1, Chore.create(chore_params)
end

def destroy
    respond_with Chore.destroy(params[:id])
end

def update
    item = Chore.find(params["id"])
    item.update_attributes(chore_params)
    respond_with chore, json: chore
end

private

def chore_params
    params.require(:chore)
end
end
