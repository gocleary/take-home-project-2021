class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.belongs_to :creator, null: false, foreign_key: { to_table: :users }
      t.text :title, null: false
      t.timestamps
    end
  end
end
