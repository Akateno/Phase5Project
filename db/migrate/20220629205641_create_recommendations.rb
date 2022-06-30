class CreateRecommendations < ActiveRecord::Migration[6.1]
  def change
    create_table :recommendations do |t|
      t.string :title
      t.string :author
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
