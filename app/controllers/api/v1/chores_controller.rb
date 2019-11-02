class Api::V1::ChoresController < Api::V1::BaseController
  def index
    @chores = Chore.where(user_id: current_user.id)
    respond_to do |format|
      format.json
    end
  end

  def create
    @chore = Chore.create(chore_params)
    respond_to do |format|
      format.json{ render @chore }
    end
  end

  def destroy
    respond_with Chore.destroy(params[:id])
  end

  def update
    @chore = Chore.find(params["id"])
    @chore.update(chore_params)
    respond_to do |format|
      format.json{ render @chore }
    end
  end

  private

  def chore_params
    params.require(:chore).permit(:title, :amount, :completed, :user_id)
  end
end
