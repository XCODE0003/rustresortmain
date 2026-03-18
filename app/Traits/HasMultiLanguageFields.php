<?php

namespace App\Traits;

trait HasMultiLanguageFields
{
    public function getLocalizedAttribute(string $field): ?string
    {
        $locale = app()->getLocale();
        $fieldName = $field.'_'.$locale;

        return $this->{$fieldName}
            ?? $this->{$field.'_en'}
            ?? $this->{$field.'_ru'}
            ?? $this->{$field}
            ?? null;
    }

    public function getLocalizedTitle(): ?string
    {
        return $this->getLocalizedAttribute('title');
    }

    public function getLocalizedDescription(): ?string
    {
        return $this->getLocalizedAttribute('description');
    }

    public function getLocalizedName(): ?string
    {
        return $this->getLocalizedAttribute('name');
    }

    public function getLocalizedQuestion(): ?string
    {
        return $this->getLocalizedAttribute('question');
    }

    public function getLocalizedAnswer(): ?string
    {
        return $this->getLocalizedAttribute('answer');
    }
}
