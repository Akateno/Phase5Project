class AddUserInfoToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :email, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
  end
end
