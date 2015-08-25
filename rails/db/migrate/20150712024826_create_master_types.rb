class CreateMasterTypes < ActiveRecord::Migration
  def change
    create_table :master_types do |t|
      t.string :m_type_name
      t.string :m_type_code

      t.timestamps null: false
    end
  end
end
