class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :creator, null: false, foreign_key: { to_table: :users }
      t.text :content, null: false
      t.timestamps
    end
  end
end
