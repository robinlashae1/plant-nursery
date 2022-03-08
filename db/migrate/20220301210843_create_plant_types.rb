class CreatePlantTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :plant_types do |t|
      t.string :name
      t.string :nickname
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
