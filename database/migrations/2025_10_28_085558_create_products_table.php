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
        Schema::create('products', function (Blueprint $table) {
            $table->id();


            $table->string('title');
            $table->string('slug')->unique();
            $table->text('summary')->nullable();
            $table->longText('description')->nullable();

            // Media
            $table->text('photo')->nullable();
            $table->json('product_gallery')->nullable();
            $table->string('featured_video_url')->nullable();

            // Pricing
            $table->decimal('price', 10, 2)->default(0);
            $table->decimal('discount', 10, 2)->nullable();

            // Stock and Status
            $table->integer('stock')->default(1);
            $table->boolean('is_featured')->default(false);
            $table->enum('status', ['active', 'inactive'])->default('inactive');

            // Product Type & Attributes
            $table->string('product_type')->nullable();
            $table->json('attributes')->nullable();

            // SEO
            $table->string('seo_meta_title')->nullable();
            $table->text('seo_meta_description')->nullable();
            $table->text('seo_meta_tag')->nullable();

            // Physical Dimensions
            $table->decimal('weight', 8, 2)->nullable();
            $table->decimal('length', 8, 2)->nullable();
            $table->decimal('width', 8, 2)->nullable();
            $table->decimal('height', 8, 2)->nullable();

            // External Links
            $table->string('amazon_url')->nullable();
            $table->string('amazon_image_url')->nullable();

            // Identification
            $table->string('sku')->nullable();
            $table->string('language')->nullable();

            // Relations
            $table->foreignId('category_id')->nullable()->constrained('product_categories')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
