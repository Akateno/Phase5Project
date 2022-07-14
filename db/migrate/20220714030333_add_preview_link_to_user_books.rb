class AddPreviewLinkToUserBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :user_books, :previewLink, :string
  end
end
