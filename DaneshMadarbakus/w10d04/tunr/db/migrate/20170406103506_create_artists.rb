class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :photo
      t.string :nationality

      t.timestamps
    end
  end
end
