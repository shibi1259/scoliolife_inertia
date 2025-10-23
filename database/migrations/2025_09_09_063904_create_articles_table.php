<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->text('excerpt');
            $table->string('language');
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('author')->nullable()->constrained('users')->cascadeOnDelete();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->unique('slug');
            $table->string('seo_title');
            $table->string('seo_description');
            $table->string('seo_keywords');
            $table->foreignId('category_id')->nullable()->constrained('article_categories')->nullOnDelete();
            $table->foreignId('tag_id')->nullable()->constrained('article_tags')->nullOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
