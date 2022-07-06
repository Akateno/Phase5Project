class RemoveLikesFromRecommendations < ActiveRecord::Migration[6.1]
  def change
    remove_column :recommendations, :likes, :integer
  end
end
