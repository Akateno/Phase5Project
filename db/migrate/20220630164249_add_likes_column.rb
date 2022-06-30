class AddLikesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :recommendations, :likes, :integer 
  end
end
