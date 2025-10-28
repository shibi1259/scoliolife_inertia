<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_attributes', function (Blueprint $table) {
            $table->id();

            // Attribute basic info
            $table->string('title');
            $table->string('slug')->unique();

            // Description / summary
            $table->text('summary')->nullable();
            $table->string('photo')->nullable();

            // Value / metadata
            $table->string('type')->nullable(); // e.g. color, size, material
            $table->string('value')->nullable(); // e.g. red, XL, cotton
            $table->decimal('price_adjustment', 10, 2)->nullable(); // optional extra cost

            // Relations
            $table->foreignId('product_id')->nullable()->constrained('products')->cascadeOnDelete();
            $table->foreignId('category_id')->nullable()->constrained('product_categories')->cascadeOnDelete();

            // Hierarchy for grouped attributes (e.g. Size -> M, L, XL)
            $table->foreignId('parent_id')->nullable()->constrained('product_attributes')->nullOnDelete();

            // Status
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_attributes');
    }
};
