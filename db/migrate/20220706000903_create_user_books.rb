class CreateUserBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_books do |t|
      t.string :title
      t.string :author
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
