class AddSlugToMasterTypes < ActiveRecord::Migration
  def change
    add_column :master_types, :slug, :string
    add_index :master_types, :slug
  end
end
