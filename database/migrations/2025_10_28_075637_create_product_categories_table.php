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
        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();

            // Basic Info
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('summary')->nullable();
            $table->longText('description')->nullable();

            // Media
            $table->string('photo')->nullable();

            // Hierarchical Structure
            $table->foreignId('parent_id')->nullable()->constrained('product_categories')->cascadeOnDelete();

            // Status
            $table->enum('status', ['active', 'inactive'])->default('inactive');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_categories');
    }
};
