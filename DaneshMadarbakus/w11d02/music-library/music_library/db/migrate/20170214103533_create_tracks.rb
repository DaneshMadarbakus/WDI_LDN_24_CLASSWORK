class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :number
      t.string :integer
      t.float5 :duration
      t.float2 :duration
      t.references :album, foreign_key: true

      t.timestamps
    end
  end
end
